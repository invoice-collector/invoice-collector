
import { SketchCollector } from '../../sketchCollector';

export class AllianzEsCollector extends SketchCollector {

    static CONFIG = {
        id: "allianz_es",
        name: "Allianz.es",
        description: "i18n.collectors.allianz_es.description",
        version: "0",
        website: "https://seguros.allianz.es/ngx-ecliente/private/pic-cliente",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4484496.jpg",
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
        entryUrl: "https://seguros.allianz.es/ngx-ecliente/private/pic-cliente",
    }

    constructor() {
        super(AllianzEsCollector.CONFIG);
    }
}
