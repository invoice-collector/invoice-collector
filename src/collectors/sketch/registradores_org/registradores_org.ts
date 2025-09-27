
import { SketchCollector } from '../../sketchCollector';

export class RegistradoresOrgCollector extends SketchCollector {

    static CONFIG = {
        id: "registradores_org",
        name: "Registradores.org",
        description: "i18n.collectors.registradores_org.description",
        version: "0",
        website: "https://www.registradores.org/propiedad/pags/estado_cuenta/facturas/ListadoFacturas.jsp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1436273.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://www.registradores.org/propiedad/pags/estado_cuenta/facturas/ListadoFacturas.jsp",
    }

    constructor() {
        super(RegistradoresOrgCollector.CONFIG);
    }
}
