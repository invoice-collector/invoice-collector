
import { SketchCollector } from '../../sketchCollector';

export class PulumiCollector extends SketchCollector {

    static CONFIG = {
        id: "pulumi",
        name: "Pulumi",
        description: "i18n.collectors.pulumi.description",
        version: "0",
        website: "https://app.pulumi.com/signin?reason=401&redirect=%2F%3F_gl%3D1*1das3d7*_gcl_au*ODA4Njc3ODA5LjE3MDg2MDY4NDY.",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2588169.jpg",
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
        entryUrl: "https://app.pulumi.com/signin?reason=401&redirect=%2F%3F_gl%3D1*1das3d7*_gcl_au*ODA4Njc3ODA5LjE3MDg2MDY4NDY.",
    }

    constructor() {
        super(PulumiCollector.CONFIG);
    }
}
