
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SteuerberaterakademieRheinlandPfalzCollector extends SketchCollector {

    static CONFIG = {
        id: "steuerberaterakademie_rheinland_pfalz",
        name: "Steuerberaterakademie Rheinland-Pfalz",
        description: "i18n.collectors.steuerberaterakademie_rheinland_pfalz.description",
        version: "0",
        website: "https://www.stb-akademie-rlp.de/aktuelle-buchungen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1347387.jpg",
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
        entryUrl: "https://www.stb-akademie-rlp.de/aktuelle-buchungen/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SteuerberaterakademieRheinlandPfalzCollector.CONFIG);
    }
}
