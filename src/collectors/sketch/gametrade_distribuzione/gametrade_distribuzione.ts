
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GametradeDistribuzioneCollector extends SketchCollector {

    static CONFIG = {
        id: "gametrade_distribuzione",
        name: "Gametrade Distribuzione",
        description: "i18n.collectors.gametrade_distribuzione.description",
        version: "0",
        website: "https://www.gametrade.it/stato_pagamenti",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1862776.jpg",
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
        loginUrl: "https://www.gametrade.it/stato_pagamenti",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(GametradeDistribuzioneCollector.CONFIG);
    }
}
