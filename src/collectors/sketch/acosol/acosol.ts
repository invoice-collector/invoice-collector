
import { SketchCollector } from '../../sketchCollector';

export class AcosolCollector extends SketchCollector {

    static CONFIG = {
        id: "acosol",
        name: "Acosol",
        description: "i18n.collectors.acosol.description",
        version: "0",
        website: "https://www.acosol.es/clientes/acosol?check_logged_in=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4484400.jpg",
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
        entryUrl: "https://www.acosol.es/clientes/acosol?check_logged_in=1",
    }

    constructor() {
        super(AcosolCollector.CONFIG);
    }
}
