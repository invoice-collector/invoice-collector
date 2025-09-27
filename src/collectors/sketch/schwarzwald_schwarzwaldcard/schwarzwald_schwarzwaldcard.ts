
import { SketchCollector } from '../../sketchCollector';

export class SchwarzwaldSchwarzwaldcardCollector extends SketchCollector {

    static CONFIG = {
        id: "schwarzwald_schwarzwaldcard",
        name: "SCHWARZWALD (SchwarzwaldCard)",
        description: "i18n.collectors.schwarzwald_schwarzwaldcard.description",
        version: "0",
        website: "https://tourist.avs.de/swc/index.php/de/1/onlineterminal/login/1/ef6e76a17beb2532cf529f3c0b75825b@2a6bfa5338301b34448c8cc8b1488f9f7c4598d73b2267c7db36ea851541f534",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/899500.jpg",
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
        entryUrl: "https://tourist.avs.de/swc/index.php/de/1/onlineterminal/login/1/ef6e76a17beb2532cf529f3c0b75825b@2a6bfa5338301b34448c8cc8b1488f9f7c4598d73b2267c7db36ea851541f534",
    }

    constructor() {
        super(SchwarzwaldSchwarzwaldcardCollector.CONFIG);
    }
}
