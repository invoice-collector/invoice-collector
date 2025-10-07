
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AnimaCollector extends SketchCollector {

    static CONFIG = {
        id: "anima",
        name: "Anima",
        description: "i18n.collectors.anima.description",
        version: "0",
        website: "https://projects.animaapp.com/team/hard-selling-qyb2suf/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1336066.jpg",
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
        entryUrl: "https://projects.animaapp.com/team/hard-selling-qyb2suf/settings/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AnimaCollector.CONFIG);
    }
}
