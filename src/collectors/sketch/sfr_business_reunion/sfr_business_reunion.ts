
import { SketchCollector } from '../../sketchCollector';

export class SfrBusinessReunionCollector extends SketchCollector {

    static CONFIG = {
        id: "sfr_business_reunion",
        name: "SFR Business reunion",
        description: "i18n.collectors.sfr_business_reunion.description",
        version: "0",
        website: "https://mon-espace-entreprise.sfr.re/documents/3133363030333338343a666163747572655f5346525f575743445f313731363631365f41424f5f3836303031375f3230323231302e706466",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1444815.jpg",
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
        entryUrl: "https://mon-espace-entreprise.sfr.re/documents/3133363030333338343a666163747572655f5346525f575743445f313731363631365f41424f5f3836303031375f3230323231302e706466",
    }

    constructor() {
        super(SfrBusinessReunionCollector.CONFIG);
    }
}
