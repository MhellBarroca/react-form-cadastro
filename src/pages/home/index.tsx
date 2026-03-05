import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow text-center flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-gray-800">Olá, seja muito bem-vindo(a)! 😊</h1>
        <p className="text-gray-500 text-sm">
          Que bom ter você por aqui !! <p>Preencha o formulário abaixo para que possamos te conhecer melhor. <p></p>É rápido e fácil!</p>  
        </p>
        <NavLink
          to="/contato"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          Preencher formulário →
        </NavLink>
      </div>
    </div>
  );
}