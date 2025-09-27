
import { SketchCollector } from '../../sketchCollector';

export class LearnyBoxCollector extends SketchCollector {

    static CONFIG = {
        id: "learny_box",
        name: "LEARNY BOX",
        description: "i18n.collectors.learny_box.description",
        version: "0",
        website: "https://learnybox.com/connexion_lb/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/409821.jpg",
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
        entryUrl: "https://learnybox.com/connexion_lb/",
    }

    constructor() {
        super(LearnyBoxCollector.CONFIG);
    }
}
