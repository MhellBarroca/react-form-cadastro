import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { formSchema } from "../../schemas/formSchema";
import type { FormData } from "../../schemas/formSchema";

export function Contato() {
  const navigate = useNavigate();

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  function mascaraCEP(e: React.ChangeEvent<HTMLInputElement>) {
    let valor = e.target.value.replace(/\D/g, "");
    if (valor.length > 5) valor = valor.slice(0, 5) + "-" + valor.slice(5, 8);
    e.target.value = valor;
    setValue("cep", valor);
  }

  async function buscarCEP(cep: string) {
    const cepLimpo = cep.replace(/\D/g, "");
    if (cepLimpo.length !== 8) return;
    const res = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
    const dados = await res.json();
    if (dados.erro) return alert("CEP não encontrado");
    setValue("rua", dados.logradouro);
    setValue("bairro", dados.bairro);
    setValue("cidade", dados.localidade);
    setValue("estado", dados.uf);
  }

  function aoEnviar(dados: FormData) {
    // vai para a página de sucesso passando o nome da pessoa
    navigate("/sucesso", { state: { nome: dados.nomeCompleto } });
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit(aoEnviar)}
        className="bg-white p-8 rounded-2xl shadow w-full max-w-lg flex flex-col gap-4"
      >
        <h1 className="text-2xl font-bold text-gray-800">Cadastro</h1>

        <Campo label="CPF" erro={errors.cpf}>
          <input {...register("cpf")} placeholder="Somente números" className={input} />
        </Campo>

        <Campo label="Nome Completo" erro={errors.nomeCompleto}>
          <input {...register("nomeCompleto")} placeholder="Seu nome" className={input} />
        </Campo>

        <Campo label="CEP" erro={errors.cep}>
          <input
            {...register("cep")}
            placeholder="xxxxx-xxx"
            onChange={mascaraCEP}
            onBlur={(e) => buscarCEP(e.target.value)}
            className={input}
          />
        </Campo>

        <Campo label="Rua" erro={errors.rua}>
          <input {...register("rua")} className={input} />
        </Campo>

        <div className="flex gap-3">
          <Campo label="Número" erro={errors.numero}>
            <input {...register("numero")} className={input} />
          </Campo>
          <Campo label="Complemento (opcional)" erro={errors.complemento}>
            <input {...register("complemento")} className={input} />
          </Campo>
        </div>

        <Campo label="Bairro" erro={errors.bairro}>
          <input {...register("bairro")} className={input} />
        </Campo>

        <div className="flex gap-3">
          <Campo label="Cidade" erro={errors.cidade}>
            <input {...register("cidade")} className={input} />
          </Campo>
          <Campo label="Estado" erro={errors.estado}>
            <input {...register("estado")} placeholder="UF" className={input} />
          </Campo>
        </div>

        <button type="submit" className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Enviar
        </button>

      </form>
    </div>
  );
}

const input = "w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400";

function Campo({ label, erro, children }: { label: string; erro: any; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      {children}
      {erro && <span className="text-red-500 text-xs">{erro.message}</span>}
    </div>
  );
}