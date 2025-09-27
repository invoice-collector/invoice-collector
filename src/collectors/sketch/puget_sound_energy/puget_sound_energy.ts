
import { SketchCollector } from '../../sketchCollector';

export class PugetSoundEnergyCollector extends SketchCollector {

    static CONFIG = {
        id: "puget_sound_energy",
        name: "Puget Sound Energy",
        description: "i18n.collectors.puget_sound_energy.description",
        version: "0",
        website: "http://www.pse.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8840.jpg",
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
        entryUrl: "http://www.pse.com",
    }

    constructor() {
        super(PugetSoundEnergyCollector.CONFIG);
    }
}
