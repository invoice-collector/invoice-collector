
import { SketchCollector } from '../../sketchCollector';

export class PlaycanvasCollector extends SketchCollector {

    static CONFIG = {
        id: "playcanvas",
        name: "PlayCanvas",
        description: "i18n.collectors.playcanvas.description",
        version: "0",
        website: "https://login.playcanvas.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1212136.jpg",
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
        entryUrl: "https://login.playcanvas.com/",
    }

    constructor() {
        super(PlaycanvasCollector.CONFIG);
    }
}
