
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VgnVerkehrsverbundGrossraumNurnbergCollector extends SketchCollector {

    static CONFIG = {
        id: "vgn_verkehrsverbund_grossraum_nurnberg",
        name: "VGN - Verkehrsverbund Grossraum Nurnberg",
        description: "i18n.collectors.vgn_verkehrsverbund_grossraum_nurnberg.description",
        version: "0",
        website: "http://www.vgn.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/38321.jpg",
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
        entryUrl: "http://www.vgn.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VgnVerkehrsverbundGrossraumNurnbergCollector.CONFIG);
    }
}
