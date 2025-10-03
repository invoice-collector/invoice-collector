
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EpidemicSoundCollector extends SketchCollector {

    static CONFIG = {
        id: "epidemic_sound",
        name: "Epidemic Sound",
        description: "i18n.collectors.epidemic_sound.description",
        version: "0",
        website: "https://player.epidemicsound.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/34991.jpg",
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
        entryUrl: "https://player.epidemicsound.com/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EpidemicSoundCollector.CONFIG);
    }
}
