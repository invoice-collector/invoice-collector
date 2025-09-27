
import { SketchCollector } from '../../sketchCollector';

export class DesktimeCollector extends SketchCollector {

    static CONFIG = {
        id: "desktime",
        name: "DeskTime",
        description: "i18n.collectors.desktime.description",
        version: "0",
        website: "https://desktime.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/836155.jpg",
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
        entryUrl: "https://desktime.com/login",
    }

    constructor() {
        super(DesktimeCollector.CONFIG);
    }
}
