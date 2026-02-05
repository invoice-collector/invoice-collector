
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeLangenfeldInternetLfeldCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_langenfeld_internet_lfeld",
        name: "Stadtwerke Langenfeld - Internet (LFeld)",
        description: "i18n.collectors.stadtwerke_langenfeld_internet_lfeld.description",
        version: "0",
        website: "https://lfeldmediaportal.stw-langenfeld.de/#/MeineRechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4509979.jpg",
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
        loginUrl: "https://lfeldmediaportal.stw-langenfeld.de/#/MeineRechnungen",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(StadtwerkeLangenfeldInternetLfeldCollector.CONFIG);
    }
}
