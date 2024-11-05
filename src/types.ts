export type AutomovelUsuario = {
  ID_AUTOMOVEL: number
  NR_QUILOMETRAGEM: number
  NR_ANO: number
  DS_PLACA: string
  DS_MODELO: string
  TP_AUTOMOVEL: string
  DS_MARCA: string
  DS_HISTORICO_AUTOMOVEL: string
  DS_AUTOMOVEL: string
}

export type Usuario = {
  ID_USUARIO: number
  NR_IDADE: number
  NR_CNH: number
  DT_NASCIMENTO: string
  NM_USUARIO: string
  NR_CPF: string
}

export type loginusuario = {
  ID_LOGIN: number,
  DS_SENHA: string, 
  ID_USUARIO: number,
  DS_USUARIO: string
}

export type enderecousuario = {
  ID_ENDERECO: number,
  NR_CEP: string,
  NM_ESTADO: string,
  NM_CIDADE: string,
  NM_BAIRRO: string,
  NM_LOGRADOURO: string,
  TP_ENDERECO: string,
  DS_COMPLEMENTO: string, 
  DS_PONTO_REFERENCIA: string
}

export type usuario_endereco = {
  ID_USUARIO: number,
  ID_ENDERECO: number
}

export type telefoneusuario = {
  ID_TELEFONE: number,
  ID_USUARIO: number,
  NR_DDI: number,
  NR_DDD: number,
  NR_TELEFONE: string,
  NR_TELEFONE_COMPLETO: string,
  TP_TELEFONE: string,
  ST_TELEFONE: string
}