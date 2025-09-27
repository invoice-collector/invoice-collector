
import { SketchCollector } from '../../sketchCollector';

export class AncvProCollector extends SketchCollector {

    static CONFIG = {
        id: "ancv_pro",
        name: "ancv pro",
        description: "i18n.collectors.ancv_pro.description",
        version: "0",
        website: "https://secure-connect.ancv.com/auth/realms/ptl/protocol/openid-connect/auth?client_id=espace-ptl&response_type=code&scope=openid%20email&redirect_uri=https%3A//espace-ptl.ancv.com/openid-connect/generic&state=Pw6iwXwaOYM5QheiOSuiFo3oByUlWDd8zqyj4Kbz6WM",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2510483.jpg",
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
        entryUrl: "https://secure-connect.ancv.com/auth/realms/ptl/protocol/openid-connect/auth?client_id=espace-ptl&response_type=code&scope=openid%20email&redirect_uri=https%3A//espace-ptl.ancv.com/openid-connect/generic&state=Pw6iwXwaOYM5QheiOSuiFo3oByUlWDd8zqyj4Kbz6WM",
    }

    constructor() {
        super(AncvProCollector.CONFIG);
    }
}
