export interface ICompanyDataList {
    data: ICompanyData[];
}

export interface ICompanyData {
    id_empresa:          string;
    nombre_empresa:      string;
    tipo_empresa:        string;
    marca:               string;
    logo:                string;
    logo_svg:            string;
    logo_horizontal_svg: string;
    direccion_empresa:   string;
    id_region:           string;
    nombre_region:       string;
    id_comuna:           string;
    nombre_comuna:       string;
    fono_empresa:        string;
    horario_atencion:    string;
    ubicacion:           Ubication;
    callcenters:         Callcenter[];
}

export interface Callcenter {
    id_region:     string;
    nombre_region: string;
    id_comuna:     string;
    nombre_comuna: string;
    tamano:        number;
    medida:        string;
    precio:        number;
    tipo_gas:      string;
}

export interface Ubication {
    latitud:  number;
    longitud: number;
}
