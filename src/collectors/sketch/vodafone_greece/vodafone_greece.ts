
import { SketchCollector } from '../../sketchCollector';

export class VodafoneGreeceCollector extends SketchCollector {

    static CONFIG = {
        id: "vodafone_greece",
        name: "Vodafone Greece",
        description: "i18n.collectors.vodafone_greece.description",
        version: "0",
        website: "https://www.vodafone.gr/#login-snack",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/136654.jpg",
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
        entryUrl: "https://www.vodafone.gr/#login-snack",
    }

    constructor() {
        super(VodafoneGreeceCollector.CONFIG);
    }
}
