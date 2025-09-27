
import { SketchCollector } from '../../sketchCollector';

export class HolaLuzCollector extends SketchCollector {

    static CONFIG = {
        id: "hola_luz",
        name: "Hola Luz",
        description: "i18n.collectors.hola_luz.description",
        version: "0",
        website: "https://clientes.holaluz.com/es/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/166537.jpg",
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
        entryUrl: "https://clientes.holaluz.com/es/login",
    }

    constructor() {
        super(HolaLuzCollector.CONFIG);
    }
}
