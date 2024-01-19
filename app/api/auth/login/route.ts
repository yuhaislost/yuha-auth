import { NextRequest, NextResponse } from 'next/server';

import * as z from 'zod';
import { LoginSchema } from '@/schemas';

export async function POST(req: NextRequest)
{
    try {

        const body: z.infer<typeof LoginSchema> = await req.json();
        const validatedData = LoginSchema.safeParse(body);

        if (!validatedData.success)
        {
            return new NextResponse('Invalid Fields', { status: 400 });
        }

        return new NextResponse('Success', { status: 200 });

    } catch(error)
    {
        console.log('[AUTH_LOGIN_POST]', error);
        return new NextResponse('Internal Error', { status: 500});
    }
}