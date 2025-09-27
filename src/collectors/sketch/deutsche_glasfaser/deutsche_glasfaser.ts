
import { SketchCollector } from '../../sketchCollector';

export class DeutscheGlasfaserCollector extends SketchCollector {

    static CONFIG = {
        id: "deutsche_glasfaser",
        name: "Deutsche Glasfaser",
        description: "i18n.collectors.deutsche_glasfaser.description",
        version: "0",
        website: "https://kundenlogin.deutsche-glasfaser.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9076.jpg",
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
        entryUrl: "https://kundenlogin.deutsche-glasfaser.de",
    }

    constructor() {
        super(DeutscheGlasfaserCollector.CONFIG);
    }
}
