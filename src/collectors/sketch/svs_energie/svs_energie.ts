
import { SketchCollector } from '../../sketchCollector';

export class SvsEnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "svs_energie",
        name: "SVS Energie",
        description: "i18n.collectors.svs_energie.description",
        version: "0",
        website: "https://www.svs-energie.de/csit/action/csStart",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/59724.jpg",
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
        entryUrl: "https://www.svs-energie.de/csit/action/csStart",
    }

    constructor() {
        super(SvsEnergieCollector.CONFIG);
    }
}
