
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ASoundEffectCollector extends SketchCollector {

    static CONFIG = {
        id: "a_sound_effect",
        name: "A Sound Effect",
        description: "i18n.collectors.a_sound_effect.description",
        version: "0",
        website: "https://www.asoundeffect.com/my-account/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1853247.jpg",
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
        entryUrl: "https://www.asoundeffect.com/my-account/orders/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ASoundEffectCollector.CONFIG);
    }
}
