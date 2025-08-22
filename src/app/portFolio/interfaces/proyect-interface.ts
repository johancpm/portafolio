export interface ProyectInterface {

  title: string;
  info: string;
  img: string;
  tecnologies: Technologies[];
  link?: string;
  gitLink?: string
}

export interface Technologies{
  name: string;
  icon: string;
  color: Colors;
}

export enum Colors {
  angular = "badge-error",
  typescript = "badge-info",
  javascript = "badge-warning",
  java = "badge-accent",
  nest = "badge-error"
}
