import { eventSchema } from '@/app/lib/validators'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Input } from './ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Button } from './ui/button'

const EventForm = () => {
    const { register, control, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(eventSchema),
        defaultValues: {
            duration: 30,
            isPrivate: true,
        },
    });
    return (
        <form className='flex flex-col gap-4'>
            <div>
                <label htmlFor='tittle' className='block text-sm font-medium text-gray-700'>
                    Event Title
                </label>
                <Input id="tittle" {...register("tittle")} className="mt-1" />
                {errors.tittle && (<p className='text-red-600'>{errors.tittle.message}</p>)}
            </div>
            <div>
                <label htmlFor='description' className='block text-sm font-medium text-gray-700'>
                    Event Description
                </label>
                <Input id="description" {...register("description")} className="mt-1" />
                {errors.description && (<p className='text-red-600'>{errors.description.message}</p>)}
            </div>
            <div>
                <label htmlFor='duration' className='block text-sm font-medium text-gray-700'>
                    Event Duration
                </label>
                <Input id="duration" {...register("duration", { valueAsNumber: true })} type='number' className="mt-1" />
                {errors.duration && (<p className='text-red-600'>{errors.duration.message}</p>)}
            </div>
            <div>
                <label htmlFor='isPrivate' className='block text-sm font-medium text-gray-700'>
                    Event Privacy
                </label>
                <Controller name='isPrivate' control={control}
                    render={({field}) => {
                        <Select value={field.value?"true":"false"} onValueChange={(value) => field.onChange(value === 'true')}>
                            <SelectTrigger className="mt-1">
                                <SelectValue placeholder="Privacy" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="true">Private</SelectItem>
                                <SelectItem value="false">Public</SelectItem>
                            </SelectContent>
                        </Select>
                    }} />
                {errors.isPrivate && (<p className='text-red-600'>{errors.isPrivate.message}</p>)}
            </div>
            <Button type="submit">Submit</Button>
        </form>
    )
}

export default EventForm