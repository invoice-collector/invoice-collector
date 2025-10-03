
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EnergieAgCollector extends SketchCollector {

    static CONFIG = {
        id: "energie_ag",
        name: "Energie AG",
        description: "i18n.collectors.energie_ag.description",
        version: "0",
        website: "https://e-portal.energieag.at/steward/login.html?ts=1691698324022&redirectUrlForSteward=https%3A%2F%2Fe-portal.energieag.at%2FblueContent%2Fj_security_check%3Furl%3D%252F4%252F0%252F_%252Findex.html%26pk_vid%3Da251d9b60f9345c8169169832365b0e9",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2098096.jpg",
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
        entryUrl: "https://e-portal.energieag.at/steward/login.html?ts=1691698324022&redirectUrlForSteward=https%3A%2F%2Fe-portal.energieag.at%2FblueContent%2Fj_security_check%3Furl%3D%252F4%252F0%252F_%252Findex.html%26pk_vid%3Da251d9b60f9345c8169169832365b0e9",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EnergieAgCollector.CONFIG);
    }
}
