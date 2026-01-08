
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KfzTeile24Collector extends SketchCollector {

    static CONFIG = {
        id: "kfz_teile24",
        name: "kfz-Teile24",
        description: "i18n.collectors.kfz_teile24.description",
        version: "0",
        website: "https://www.kfzteile24.de/?gclid=EAIaIQobChMIpNuGjJT6_gIVSrrVCh01awK8EAAYASAAEgJ8DfD_BwE",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1932186.jpg",
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
        loginUrl: "https://www.kfzteile24.de/?gclid=EAIaIQobChMIpNuGjJT6_gIVSrrVCh01awK8EAAYASAAEgJ8DfD_BwE",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KfzTeile24Collector.CONFIG);
    }
}
