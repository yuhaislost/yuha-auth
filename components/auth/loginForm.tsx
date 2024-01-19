'use client';

import * as z from 'zod';

import { LoginSchema } from "@/schemas";
import { CardWrapper } from "./cardWrapper";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FormError } from '../formError';
import { FormSuccess } from '../formSuccess';
import axios, { AxiosError } from 'axios';
import { useState, useTransition } from 'react';

export const LoginForm = function()
{
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    });
    
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    async function onSubmit(values: z.infer<typeof LoginSchema>)
    {
        setError("");
        setSuccess("");
        startTransition(async () => {
            try{
                const res = await axios.post('/api/auth/login', values);
                setSuccess(res.data);
                console.log(res);
            }catch(error: any)
            {
                setError(error.response.data);
            }
        });
    }

    return (
        <CardWrapper headerLabel="Hi! Glad your back." backButtonLabel="Don't have an account?" backButtonHref="/auth/register" showSocial>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                    <div className='space-y-4'>
                        <FormField control={form.control} name="email" render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder='example@domain.com' disabled={isPending}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}/>
                        <FormField control={form.control} name="password" render={
                            ({field}) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder='******' type='password' disabled={isPending}/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )
                        }/>
                    </div>
                    <FormError message={error}/>
                    <FormSuccess message={success}/>
                    <Button type='submit' className='w-full' disabled={isPending}>
                        Login
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
}
