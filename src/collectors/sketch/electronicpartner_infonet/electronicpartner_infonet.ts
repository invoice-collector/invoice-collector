
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ElectronicpartnerInfonetCollector extends SketchCollector {

    static CONFIG = {
        id: "electronicpartner_infonet",
        name: "ElectronicPartner INFONET",
        description: "i18n.collectors.electronicpartner_infonet.description",
        version: "0",
        website: "https://www.ep-infonet.de/apps/de-DE?layout=v6#/app/zahlungen/de-DE",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/221825.jpg",
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
        loginUrl: "https://www.ep-infonet.de/apps/de-DE?layout=v6#/app/zahlungen/de-DE",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ElectronicpartnerInfonetCollector.CONFIG);
    }
}
