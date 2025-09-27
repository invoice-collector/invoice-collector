
import { SketchCollector } from '../../sketchCollector';

export class SpesenfuchsCollector extends SketchCollector {

    static CONFIG = {
        id: "spesenfuchs",
        name: "SpesenFuchs",
        description: "i18n.collectors.spesenfuchs.description",
        version: "0",
        website: "https://app.spesenfuchs.de/?COK",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/806055.jpg",
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
        entryUrl: "https://app.spesenfuchs.de/?COK",
    }

    constructor() {
        super(SpesenfuchsCollector.CONFIG);
    }
}
