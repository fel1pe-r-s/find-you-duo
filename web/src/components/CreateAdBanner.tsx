import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";
import { Input } from "./Form/input";

export function CreateAdModal(){
  return(
    
    <Dialog.Portal>
    <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

    <Dialog.Content className="fixed bg-[#2A2643] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
      <Dialog.Title className="text-3xl font-black">
        Publicar anúncio um anúncio
      </Dialog.Title>

      <form
        className="mt-8 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="game" className="font-semibold">
            Qual o game?
          </label>
          <Input
            id="game"
            type="text"
            placeholder="Selecione o game que deseja jogar"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Seu nome (ou nickname)</label>
          <Input
            id="name"
            type="text"
            placeholder="Como te chamam dentro do game?"
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="yearsplaying">Joga há quantos anos?</label>
            <Input
              id="yearsplaying"
              type="number"
              placeholder="Tudo bem ser Zero"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="discord">Qual seu Discord?</label>
            <Input id="discord" type="text" placeholder="Usuario#0000" />
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="weekDays">Quando costuma jogar?</label>

            <div className="grid grid-cols-4 gap-2">
              <button
               className="w-8 h-8 rounded bg-zinc-900"
               title="Domingo">D</button>
              <button
               className="w-8 h-8 rounded bg-zinc-900"
               title="Segunda">S</button>
              <button
               className="w-8 h-8 rounded bg-zinc-900"
               title="Terça">T</button>
              <button
               className="w-8 h-8 rounded bg-zinc-900"
               title="Quarta">Q</button>
              <button
               className="w-8 h-8 rounded bg-zinc-900"
               title="Quinta">Q</button>
              <button
               className="w-8 h-8 rounded bg-zinc-900"
               title="Sexta">S</button>
              <button
               className="w-8 h-8 rounded bg-zinc-900"
               title="Sabado">S</button>
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="hourStart">Qual o horário do dia?</label>
            <div className="grid grid-cols-2 gap-2">
              <Input type="time" id="hourStart" placeholder="De" />
              <Input type="time" id="hourEnd" placeholder="Até" />
            </div>
          </div>
        </div>
        <div className="mt-2 flex gap-2 text-sm">
          <Input type="checkbox" id="" />
          Costumo me conectar ao chat de voz?
        </div>
        <footer className="mt-4 flex justify-between">
          <Dialog.Close className="bg-zinc-500 hover:bg-zinc-600 px-5 h-12  rounded-md font-semibold">Cancelar</Dialog.Close>
          <button 
          className="bg-violet-500 px-5 h-12  rounded-md font-semibold flex
           items-center gap-3 hover:bg-violet-600"
          type="submit"
          >
            <GameController className="w-6 h-6" />
            Encontrar duo
          </button>
        </footer>
      </form>
    </Dialog.Content>
  </Dialog.Portal>
  )
}