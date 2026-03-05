import { useLocation, useNavigate } from "react-router-dom";

export function Sucesso() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const nome = state?.nome ?? "pessoa";

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-10 rounded-2xl shadow text-center flex flex-col gap-4 w-full max-w-md">
        <div className="text-5xl">🎉</div>
        <h1 className="text-2xl font-bold text-gray-800">Cadastro realizado!</h1>
        <p className="text-gray-500">
          Obrigado, <span className="font-semibold text-blue-600">{nome}</span>! Seu registro foi feito com sucesso.
        </p>
        <button
          onClick={() => navigate("/contato")}
          className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Fazer novo cadastro
        </button>
      </div>
    </div>
  );
}