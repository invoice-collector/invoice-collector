
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class UnrealCollector extends SketchCollector {

    static CONFIG = {
        id: "unreal",
        name: "Unreal",
        description: "i18n.collectors.unreal.description",
        version: "0",
        website: "https://accounts.unrealengine.com/login?lang=en_US&redirectUrl=https%3A%2F%2Fwww.unrealengine.com%2Fen-US%2Fblog&client_id=43e2dea89b054198a703f6199bee6d5b&noHostRedirect=true",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/49772.jpg",
        type: CollectorType.SKETCH,
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
        loginUrl: "https://accounts.unrealengine.com/login?lang=en_US&redirectUrl=https%3A%2F%2Fwww.unrealengine.com%2Fen-US%2Fblog&client_id=43e2dea89b054198a703f6199bee6d5b&noHostRedirect=true",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UnrealCollector.CONFIG);
    }
}
