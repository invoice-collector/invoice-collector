
import { SketchCollector } from '../../sketchCollector';

export class TowerCollector extends SketchCollector {

    static CONFIG = {
        id: "tower",
        name: "Tower",
        description: "i18n.collectors.tower.description",
        version: "0",
        website: "https://account.git-tower.com/user_session/new",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/156397.jpg",
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
        entryUrl: "https://account.git-tower.com/user_session/new",
    }

    constructor() {
        super(TowerCollector.CONFIG);
    }
}
