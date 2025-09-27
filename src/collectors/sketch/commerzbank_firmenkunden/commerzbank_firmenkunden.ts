
import { SketchCollector } from '../../sketchCollector';

export class CommerzbankFirmenkundenCollector extends SketchCollector {

    static CONFIG = {
        id: "commerzbank_firmenkunden",
        name: "Commerzbank - Firmenkunden",
        description: "i18n.collectors.commerzbank_firmenkunden.description",
        version: "0",
        website: "https://cbportal.commerzbank.com/gpp/pages/konto/tabs/uebersicht.xhtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/174866.jpg",
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
        entryUrl: "https://cbportal.commerzbank.com/gpp/pages/konto/tabs/uebersicht.xhtml",
    }

    constructor() {
        super(CommerzbankFirmenkundenCollector.CONFIG);
    }
}
