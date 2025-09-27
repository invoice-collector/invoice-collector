
import { SketchCollector } from '../../sketchCollector';

export class MojoAppCollector extends SketchCollector {

    static CONFIG = {
        id: "mojo_app",
        name: "Mojo App",
        description: "i18n.collectors.mojo_app.description",
        version: "0",
        website: "https://app.mojo.video/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2729776.jpg",
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
        entryUrl: "https://app.mojo.video/login",
    }

    constructor() {
        super(MojoAppCollector.CONFIG);
    }
}
