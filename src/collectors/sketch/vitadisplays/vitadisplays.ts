
import { SketchCollector } from '../../sketchCollector';

export class VitadisplaysCollector extends SketchCollector {

    static CONFIG = {
        id: "vitadisplays",
        name: "VITAdisplays",
        description: "i18n.collectors.vitadisplays.description",
        version: "0",
        website: "https://www.prospekthalter.com/mein-konto/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11361.jpg",
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
        entryUrl: "https://www.prospekthalter.com/mein-konto/",
    }

    constructor() {
        super(VitadisplaysCollector.CONFIG);
    }
}
