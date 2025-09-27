
import { SketchCollector } from '../../sketchCollector';

export class MacstadiumCollector extends SketchCollector {

    static CONFIG = {
        id: "macstadium",
        name: "MacStadium",
        description: "i18n.collectors.macstadium.description",
        version: "0",
        website: "https://macstadium.com/users/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4296.jpg",
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
        entryUrl: "https://macstadium.com/users/login",
    }

    constructor() {
        super(MacstadiumCollector.CONFIG);
    }
}
