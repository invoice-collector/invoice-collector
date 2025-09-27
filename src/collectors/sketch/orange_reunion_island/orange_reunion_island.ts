
import { SketchCollector } from '../../sketchCollector';

export class OrangeReunionIslandCollector extends SketchCollector {

    static CONFIG = {
        id: "orange_reunion_island",
        name: "Orange Reunion Island",
        description: "i18n.collectors.orange_reunion_island.description",
        version: "0",
        website: "https://login.orange.fr/?return_url=https://reunion.orange.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/222787.jpg",
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
        entryUrl: "https://login.orange.fr/?return_url=https://reunion.orange.fr/",
    }

    constructor() {
        super(OrangeReunionIslandCollector.CONFIG);
    }
}
