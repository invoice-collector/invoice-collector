
import { SketchCollector } from '../../sketchCollector';

export class PhilipsSpeechliveCollector extends SketchCollector {

    static CONFIG = {
        id: "philips_speechlive",
        name: "Philips Speechlive",
        description: "i18n.collectors.philips_speechlive.description",
        version: "0",
        website: "https://www.speechexec.com/ger/rechnungen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/211158.jpg",
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
        entryUrl: "https://www.speechexec.com/ger/rechnungen/",
    }

    constructor() {
        super(PhilipsSpeechliveCollector.CONFIG);
    }
}
