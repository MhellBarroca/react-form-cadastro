import { z } from "zod";

function validarCPF(cpf: string) {
  if (cpf.length !== 11) return false;
  if (/^(\d)\1+$/.test(cpf)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cpf[i]) * (10 - i);
  let d1 = (soma * 10) % 11;
  if (d1 === 10 || d1 === 11) d1 = 0;
  if (d1 !== parseInt(cpf[9])) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpf[i]) * (11 - i);
  let d2 = (soma * 10) % 11;
  if (d2 === 10 || d2 === 11) d2 = 0;
  if (d2 !== parseInt(cpf[10])) return false;

  return true;
}

export const formSchema = z.object({
  cpf:          z.string().length(11, "CPF deve ter 11 dígitos").refine(validarCPF, "CPF inválido"),
  nomeCompleto: z.string().min(3, "Nome muito curto"),
  cep:          z.string().regex(/^\d{5}-\d{3}$/, "CEP inválido"), // aceita formato xxxxx-xxx
  rua:          z.string().min(1, "Rua é obrigatória"),
  numero:       z.string().min(1, "Número é obrigatório"),
  complemento:  z.string().optional(),
  bairro:       z.string().min(1, "Bairro é obrigatório"),
  cidade:       z.string().min(1, "Cidade é obrigatória"),
  estado:       z.string().min(2, "Estado é obrigatório"),
});

export type FormData = z.infer<typeof formSchema>;