
import { SketchCollector } from '../../sketchCollector';

export class BelviaImmobilierCollector extends SketchCollector {

    static CONFIG = {
        id: "belvia_immobilier",
        name: "Belvia immobilier",
        description: "i18n.collectors.belvia_immobilier.description",
        version: "0",
        website: "https://www.citya.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/108157.jpg",
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
        entryUrl: "https://www.citya.com/",
    }

    constructor() {
        super(BelviaImmobilierCollector.CONFIG);
    }
}
