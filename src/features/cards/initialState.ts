import { v4 as uuidv4 } from "uuid";
export interface ICardStack {
  dragging: boolean;
  exhausted: boolean;
  faceup: boolean;
  fill: string;
  id: string;
  selected: boolean;
  x: number;
  y: number;
  cardStack: ICardDetails[];
}

export interface ICardDetails {
  jsonId: string;
}

export interface IPreviewCard {
  id: string;
}

export interface ICardsState {
  cards: ICardStack[];
  ghostCards: ICardStack[];
  previewCard: IPreviewCard | null;
  dropTargetCard: ICardStack | null;
  panMode: boolean;
}

export const initialState: ICardsState = {
  cards: [
    {
      dragging: false,
      exhausted: false,
      faceup: true,
      fill: "red",
      id: uuidv4(),
      selected: false,
      x: 200,
      y: 200,
      cardStack: [{ jsonId: "01001a" }],
    },
    {
      dragging: false,
      exhausted: false,
      faceup: true,
      fill: "red",
      id: uuidv4(),
      selected: false,
      x: 400,
      y: 400,
      cardStack: [{ jsonId: "01027" }],
    },
    {
      dragging: false,
      exhausted: false,
      faceup: true,
      fill: "red",
      id: uuidv4(),
      selected: false,
      x: 200,
      y: 600,
      cardStack: [{ jsonId: "01036" }],
    },
  ],
  ghostCards: [],
  previewCard: null,
  dropTargetCard: null,
  panMode: true,
};