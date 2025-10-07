
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VgsdVerbandDerGrunderUndSelbststandigenEVCollector extends SketchCollector {

    static CONFIG = {
        id: "vgsd_verband_der_grunder_und_selbststandigen_e_v",
        name: "VGSD - Verband der Grunder und Selbststandigen e.V",
        description: "i18n.collectors.vgsd_verband_der_grunder_und_selbststandigen_e_v.description",
        version: "0",
        website: "https://www.vgsd.de/account/rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777330.jpg",
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
        entryUrl: "https://www.vgsd.de/account/rechnungen",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VgsdVerbandDerGrunderUndSelbststandigenEVCollector.CONFIG);
    }
}
