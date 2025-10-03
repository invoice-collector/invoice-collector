
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SteuerberaterverrechnungsstelleStbvsKundenbereichCollector extends SketchCollector {

    static CONFIG = {
        id: "steuerberaterverrechnungsstelle_stbvs_kundenbereich",
        name: "Steuerberaterverrechnungsstelle - StBVS Kundenbereich",
        description: "i18n.collectors.steuerberaterverrechnungsstelle_stbvs_kundenbereich.description",
        version: "0",
        website: "https://meine-stbvs.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/44300.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://meine-stbvs.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SteuerberaterverrechnungsstelleStbvsKundenbereichCollector.CONFIG);
    }
}
