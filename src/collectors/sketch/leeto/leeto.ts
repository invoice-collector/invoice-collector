
import { SketchCollector } from '../../sketchCollector';

export class LeetoCollector extends SketchCollector {

    static CONFIG = {
        id: "leeto",
        name: "Leeto",
        description: "i18n.collectors.leeto.description",
        version: "0",
        website: "https://app.leeto.co/admin/comptes/compte-asc",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4514176.jpg",
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
        entryUrl: "https://app.leeto.co/admin/comptes/compte-asc",
    }

    constructor() {
        super(LeetoCollector.CONFIG);
    }
}
