
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SteuerverwaltungDesKantonsBernCollector extends SketchCollector {

    static CONFIG = {
        id: "steuerverwaltung_des_kantons_bern",
        name: "Steuerverwaltung des Kantons Bern",
        description: "i18n.collectors.steuerverwaltung_des_kantons_bern.description",
        version: "0",
        website: "http://www.fin.be.ch",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/46558.jpg",
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
        loginUrl: "http://www.fin.be.ch",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SteuerverwaltungDesKantonsBernCollector.CONFIG);
    }
}
