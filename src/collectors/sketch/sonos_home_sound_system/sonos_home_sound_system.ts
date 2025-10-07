
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SonosHomeSoundSystemCollector extends SketchCollector {

    static CONFIG = {
        id: "sonos_home_sound_system",
        name: "Sonos Home Sound System",
        description: "i18n.collectors.sonos_home_sound_system.description",
        version: "0",
        website: "https://www.sonos.com/myaccount/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/31255.jpg",
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
        entryUrl: "https://www.sonos.com/myaccount/orders/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SonosHomeSoundSystemCollector.CONFIG);
    }
}
