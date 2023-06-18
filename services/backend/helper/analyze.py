import openai

QnA_dict = {
    'question' : '',
    'answer' : ''
}

list = []

openai.organization = "org-UnCuRgsuSHGeQc4B4nULBhuW"
openai.api_key = "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"

def make_flash_cards(prompt):
    completion = openai.ChatCompletion.create(
    model = 'gpt-3.5-turbo',
    messages = [
        {'role': 'user', 'content': 'Can you use the given text to make 10 questions and answers?'},
        {'role': 'assistant', 'content': 'Yes I can!'},
        {'role': 'user', 'content': '{}'.format(prompt)}
    ],
    temperature = 0  
    )
    
    return completion

if __main__ == '__name__':
    prompt = "The above equation states that the convolution of two signals is equivalent to the multiplication of their Fourier transforms. Therefore, by transforming the input into frequency space, a convolution becomes a single element-wise multiplication. In other words, the input to a convolutional layer and kernel can be converted into frequencies using the Fourier Transform, multiplied once and then converted back using the inverse Fourier Transform. There is an overhead associated with transforming the inputs into the Fourier domain and the inverse Fourier Transform to get responses back to the spatial domain. However, this is offset by the speed up obtained from performing a single multiplication instead of having to multiply the kernel with different sections of the image."
    completion = make_flash_cards(prompt=prompt)
    print(completion['choices'][0]['message']['content'])