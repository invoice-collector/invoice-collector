
import { SketchCollector } from '../../sketchCollector';

export class UnrealCollector extends SketchCollector {

    static CONFIG = {
        id: "unreal",
        name: "Unreal",
        description: "i18n.collectors.unreal.description",
        version: "0",
        website: "https://accounts.unrealengine.com/login?lang=en_US&redirectUrl=https%3A%2F%2Fwww.unrealengine.com%2Fen-US%2Fblog&client_id=43e2dea89b054198a703f6199bee6d5b&noHostRedirect=true",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/49772.jpg",
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
        entryUrl: "https://accounts.unrealengine.com/login?lang=en_US&redirectUrl=https%3A%2F%2Fwww.unrealengine.com%2Fen-US%2Fblog&client_id=43e2dea89b054198a703f6199bee6d5b&noHostRedirect=true",
    }

    constructor() {
        super(UnrealCollector.CONFIG);
    }
}
