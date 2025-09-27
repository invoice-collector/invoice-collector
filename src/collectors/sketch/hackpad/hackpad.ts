
import { SketchCollector } from '../../sketchCollector';

export class HackpadCollector extends SketchCollector {

    static CONFIG = {
        id: "hackpad",
        name: "Hackpad",
        description: "i18n.collectors.hackpad.description",
        version: "0",
        website: "https://www.dropbox.com/login?cont=https%3A%2F%2Fpaper.dropbox.com%2Fhackpad%3FredirectToSignIn%3D1&register_cont=https%3A%2F%2Fpaper.dropbox.com%2Fhackpad%3FredirectToSignIn%3D1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7044.jpg",
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
        entryUrl: "https://www.dropbox.com/login?cont=https%3A%2F%2Fpaper.dropbox.com%2Fhackpad%3FredirectToSignIn%3D1&register_cont=https%3A%2F%2Fpaper.dropbox.com%2Fhackpad%3FredirectToSignIn%3D1",
    }

    constructor() {
        super(HackpadCollector.CONFIG);
    }
}
